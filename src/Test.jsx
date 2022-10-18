import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigator = useNavigate();
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "아프지마 - 병의원 가격등록",
        text: "우리동네 병의원 비급여항목 가격정보 등록하고 이디야 커피 받아가자!",
        url: "https://thisisyjin.github.io/share-test",
      });
    } else {
      alert("안대요");
    }
  };
  return (
    <div>
      <h1>하이</h1>
      <button onClick={handleShare}>공유하기</button>
    </div>
  );
};

export default Test;
