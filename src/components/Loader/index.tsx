import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={210}
    height={254}
    viewBox="0 0 210 254"
    backgroundColor="#f3f3f3"
    foregroundColor="#c0bfbf"
    // {...props}
  >
    <rect x="30" y="36" rx="0" ry="0" width="150" height="90" />
    <rect x="30" y="143" rx="0" ry="0" width="150" height="15" />
    <rect x="30" y="162" rx="0" ry="0" width="93" height="15" />
    <rect x="30" y="199" rx="0" ry="0" width="80" height="24" />
    <rect x="148" y="191" rx="0" ry="0" width="32" height="32" />
  </ContentLoader>
);

export default MyLoader;
