const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = {
  getRecentGame: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/game/recentGames`);
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      const responseData = await response.json();
      return responseData.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("알 수 없는 에러 발생");
      }
    }
  },
  getHighlightVideo: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/media/highlightVideo`);
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("알 수 없는 에러 발생");
      }
    }
  },
  recentNewsFetcher: async () => {
    const response = await fetch("http://43.201.249.197/api/media/hotissue?count=10");
      return response.json();
  },
  // 메인페이지의 '하이라이트 영상' 을 불러오는 api
  highlightsVideoFetcher: async () => {
      const response = await fetch("http://43.201.249.197/api/media/highlightlist?count=10");
      return response.json();
  },
};
