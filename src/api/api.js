import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && config.headers) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터: accessToken 만료 시 자동 재발급
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest.retry) {
      // eslint-disable-next-line no-param-reassign
      originalRequest.retry = true;
      try {
        const res = await axios.post(
          `/reissue`,
          {},
          {
            withCredentials: true,
          },
        );

        const newAccessToken = res.data?.data?.jwtToken;
        if (newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken);
          // eslint-disable-next-line dot-notation
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest); // 재시도
        }
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

// 토큰 없이 사용하는 API(회원가입)
export const publicApi = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
