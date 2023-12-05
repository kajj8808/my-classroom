export const getVideoId = (url: String) => {
  const match = url.match(/[?&]v=([^&]+)/);
  return match && match[1] ? match[1] : null;
};
