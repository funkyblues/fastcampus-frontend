// 객체 데이터를 옵션으로 내보내기.

module.exports = {
  // 일일이 따로 명시해주어야 하는 javascript의 기능을 한번에 지원해주는 패키지
  presets: ["@babel/preset-env"],
  // async, await 비동기 처리를 위한 plugin
  plugins: [["@babel/plugin-transform-runtime"]],
};
