/*
-> 어떤 분위기의 노래를 원해? (청량/신남, 짠내/잔잔, 마라/락, 아련/벅참) 
-> 분위기의 정도가 어땠으면 해? (상 / 중 / 하)
-> 마지막으로 골라줘! (솔로/ 단체)
*/

const DATA = [
  {
    mood: "청량/신남",
    degree: "상",
    teamOrSolo: "팀",
    img: "/img/Gravity.jpeg",
    title: "한 페이지가 될 수 있게 - DAY6",
  },
  {
    mood: "청량/신남",
    degree: "중",
    teamOrSolo: "팀",
    img: "/img/Gravity.jpeg",
    title: "Best Part - DAY6",
  },
  {
    mood: "청량/신남",
    degree: "하",
    teamOrSolo: "팀",
    img: "/img/Moonrise.jpeg",
    title: "Better Better - DAY6",
  },
  {
    mood: "청량/신남",
    degree: "상",
    teamOrSolo: "솔로",
    img: "/img/LettersWithNotes.jpeg",
    title: "let it be summer - YoungK(DAY6)",
  },
  {
    mood: "청량/신남",
    degree: "중",
    teamOrSolo: "솔로",
    img: "/img/Eternal.jpeg",
    title: "베스트 송 - YoungK(DAY6)",
  },
  {
    mood: "청량/신남",
    degree: "하",
    teamOrSolo: "솔로",
    img: "/img/Eternal.jpeg",
    title: "Microphone - Youngk(DAY6)",
  },
  {
    mood: "벅참/아련",
    degree: "상",
    teamOrSolo: "팀",
    img: "/img/BeautifulFeeling.jpeg",
    title: "Beautiful Feeling - DAY6",
  },
  {
    mood: "벅참/아련",
    degree: "중",
    teamOrSolo: "팀",
    img: "/img/EvenofDay.jpeg",
    title: "사랑, 이게 맞나 봐 - DAY6(EvenOfDay)",
  },
  {
    mood: "벅참/아련",
    degree: "하",
    teamOrSolo: "팀",
    img: "/img/Moonrise.jpeg",
    title: "좋아합니다 - DAY6",
  },
  {
    mood: "벅참/아련",
    degree: "상",
    teamOrSolo: "솔로",
    img: "/img/Philmography.jpeg",
    title: "행운을 빌어줘 - 원필(Day6)",
  },
  {
    mood: "벅참/아련",
    degree: "중",
    teamOrSolo: "솔로",
    img: "/img/Philmography.jpeg",
    title: "외딴섬의 외톨이 - 원필(Day6)",
  },
  {
    mood: "벅참/아련",
    degree: "하",
    teamOrSolo: "솔로",
    img: "/img/Philmography.jpeg",
    title: "언젠가 봄은 찾아올 거야 - 원필(Day6)",
  },
  {
    mood: "잔잔/짠내",
    degree: "상",
    teamOrSolo: "팀",
    img: "/img/Entropy.jpeg",
    title: "마치 흘러가는 바람처럼 - DAY6",
  },
  {
    mood: "잔잔/짠내",
    degree: "중",
    teamOrSolo: "팀",
    img: "/img/Sunrise.jpeg",
    title: "예뻤어 - DAY6",
  },
  {
    mood: "잔잔/짠내",
    degree: "하",
    teamOrSolo: "팀",
    img: "/img/Moonrise.jpeg",
    title: "그렇더라고요 - DAY6",
  },
  {
    mood: "잔잔/짠내",
    degree: "상",
    teamOrSolo: "솔로",
    img: "/img/LettersWithNotes.jpeg",
    title: "이것밖에는 없다 - Youngk(Day6)",
  },
  {
    mood: "잔잔/짠내",
    degree: "중",
    teamOrSolo: "솔로",
    img: "/img/LettersWithNotes.jpeg",
    title: "what is.. - Youngk(Day6)",
  },
  {
    mood: "잔잔/짠내",
    degree: "하",
    teamOrSolo: "솔로",
    img: "/img/Philmography.jpeg",
    title: "안녕, 잘 가 - 원필(Day6)",
  },
  {
    mood: "마라/락",
    degree: "상",
    teamOrSolo: "팀",
    img: "/img/Entropy.jpeg",
    title: "Sweet Chaos - DAY6",
  },
  {
    mood: "마라/락",
    degree: "중",
    teamOrSolo: "팀",
    img: "/img/Entropy.jpeg",
    title: "Rescue Me - DAY6",
  },
  {
    mood: "마라/락",
    degree: "하",
    teamOrSolo: "팀",
    img: "/img/Entropy.jpeg",
    title: "365247 - DAY6",
  },
  {
    mood: "마라/락",
    degree: "상",
    teamOrSolo: "솔로",
    img: "/img/Eternal.jpeg",
    title: "사랑은 얼어 죽을 - YoungK(Day6)",
  },
  {
    mood: "마라/락",
    degree: "중",
    teamOrSolo: "솔로",
    img: "/img/LettersWithNotes.jpeg",
    title: "STRANGE - Youngk(Day6)",
  },
  {
    mood: "마라/락",
    degree: "하",
    teamOrSolo: "솔로",
    img: "/img/Eternal.jpeg",
    title: "불면증 - Youngk(Day6)",
  },
];

export default DATA;
