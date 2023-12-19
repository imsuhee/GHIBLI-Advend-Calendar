// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.innerHTML = text.replace(/\n/g, '<br>'); // 줄 바꿈 문자를 <br> 태그로 대체합니다.



  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "꿈이었지만 꿈이 아니였어..." },
  { "number": 2, "message": "일인걸 즐거운 일만 있는게 아냐" },
  { "number": 3, "message": "스스로 가서 운을 시험해봐라" },
  { "number": 4, "message": "이렇게 웃어봐\n 그러면 무서운게 사라진단다." },
  { "number": 5, "message": "살아있으면 어떻게든 될꺼야" },
  { "number": 6, "message": "최고의 불꽃은 최악의 상황일 때 가장 밝게 타오른다고 하지" },
  { "number": 7, "message": "운명이라는 것이 있어 \n 괴로워도 운명은 바꿀 수 없는거야" },
  { "number": 8, "message": "은퇴할 거면 일찍 은퇴해라 \n- 미야자키 하야오" },
  { "number": 9, "message": "한번 손댄 일은 끝까지 해야 하는 법!" },
  { "number": 10, "message": "한번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이다." },
  {
    "number": 11, "message": "지금까지 열심히 해 왔는걸\n 즐거운 일이 좀 더 많이질 뿐이야"
  },
  { "number": 12, "message": "너를 안고 온 힘을 다해 뛸게" },
  { "number": 13, "message": "죽음이 있어 삶이 가치를 얻고 어둠이 있어 빛이 존재한다." },
  { "number": 14, "message": "너무 겉모습에만 신경 쓰지마 \n 중요한건 마음이란다." },
  { "number": 15, "message": "날지 않는 돼지는 그냥 돼지일 뿐이야" },
  { "number": 16, "message": "자신의 일은 스스로 결정하는 거야." },
  { "number": 17, "message": "재능이란, 열정을 지속시키는 노력\n- 미야자키 하야오" },
  { "number": 18, "message": "목숨은 죽는다는것을 알기에 소중한 거야." },
  { "number": 19, "message": "사람은 누구나 죽어\n 빠르고 늦고의 차이지 \n중요한건, 죽음에 먹히지 않는거야" },
  { "number": 20, "message": "포뇨는 소스케가 좋아!\n포뇨는 인간이 될꺼야" },
  { "number": 21, "message": "좋은 녀석은 모두 죽어" },
  { "number": 22, "message": "나는 살아가기 위해 태어난 거야." },
  { "number": 23, "message": "확인 한 다음에 걱정해도 안 늦어" },
  { "number": 24, "message": "아이들에게 '살아서 좋다'는 이야기를 들려주는 영화를 만들고 싶어요.\n– 미야자키 하야오" }
];
