"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import QueryChat from "./QueryChat";
import QuerySummary from "./QuerySummary";

export default function MainModal({
  title,
  videoId,
}: {
  title: String;
  videoId: String;
}) {
  const router = useRouter();

  const [hasWindow, setHasWindow] = useState(false);
  const [summary, setSummary] = useState(
    "안녕하세요. WebPish Construction에 오신 것을 환영합니다. 이것은 12주차의 두 번째 강의입니다. 이번 강의에서는 이전 수업에서 배운 가상 클래스 선택자와 가상 요소 선택자를 실습해 보겠습니다. 따라서 오늘은 그것을 적용해 보도록 하겠습니다. 우선, 우리는 11주차의 프로젝트를 가져와서 이 페이지에 네비게이션 바를 추가하려고 합니다. 따라서 이를 수정해 보겠습니다. 먼저 HTML 페이지를 수정하여 네비게이션을 추가해야 합니다. 일반적으로 네비게이션은 헤더 안에 있습니다. 따라서 우리는 시맨틱 HTML 요소를 활용할 것입니다. 헤더 안에 네비게이션을 넣을 것이지만, 헤더와 본문 사이에 구분을 두고 싶습니다. 이유를 보이기 위해 지금 업데이트하겠습니다. 일반적으로 네비게이션은 순서 목록으로 만듭니다. 이전에 언급한 적이 있습니다. 따라서 우리의 네비게이션에는 각 항목에 대한 목록 항목이 있을 것입니다. 이는 다른 페이지로 이동할 수 있는 링크이므로 앵커 요소입니다. 지금은 자동으로 작동하지 않지만 일단 추가하겠습니다. 지금은 어디로 이동하지 않습니다. 이것은 홈을 위한 것입니다. 복사해 보겠습니다. 따라서 우리는 네 가지 섹션을 가지게 될 것입니다. 서비스, 정보, 연락처 정보입니다. 이를 저장하고 새로 고침하겠습니다. 이제 우리는 이 목록을 가지고 있습니다. 네비게이션에 색상을 주어 헤더와 페이지의 나머지 부분을 구분할 수 있도록 하려고 합니다. 따라서 헤더를 선택하겠습니다. 일반적으로 헤더보다 이전에 보이는 요소에 대한 스타일을 헤더의 스타일보다 먼저 배치하려고 노력합니다. 그래서 헤더 이전에 헤더에 대한 스타일을 배치하겠습니다. 여기에 헤더 스타일이 있을 것입니다. 배경 색상을 지정하여 상자를 볼 수 있습니다. 이전에 사용한 회색 색상을 사용하겠습니다. 웹 사이트를 디자인할 때 보통 3~4가지 색상을 사용하여 반복적으로 사용합니다. 이제 이를 새로 고침하겠습니다. 따라서 보시다시피 잘 보이지는 않지만 여기에 헤더와 페이지 내용을 구분하기 위해 일부 여백을 추가하고 싶습니다. 따라서 1 REM의 하단 여백을 추가하겠습니다. 좋습니다. 그러나 먼저 이것도 변경해야 합니다. 실제로 이것은 스타일입니다. 여기에서 HTML 요소의 글꼴과 색상을 변경하여 가시적으로 만들기를 원합니다. 즉, 링크를 스타일링하겠습니다. 링크를 스타일링할 것이므로 헤더 내부에 있는 링크를 선택하겠습니다. 방문하지 않은 상태에서는 흰색으로 지정하겠습니다. 이렇게도 지정할 수 있습니다. 이렇게 보입니다. 그러나 실제로는 이렇게 네비게이션이 있는 웹 사이트를 보지 않습니다. 따라서 네비게이션을 여기에 두고 싶습니다. 즉, 페이지의 맨 위에 네비게이션을 두고 싶습니다. 또한 여백도 원하지 않습니다. 따라서 네비게이션을 여기에 두고 싶으며, 옵션도 서로 다른 것으로 배치하고 싶습니다. 예를 들어, 여기에 홈을 배치하고 나중에 서비스를 배치하고 네 가지 옵션을 여기에 배치하고 싶습니다. 그렇다면 어떻게 할 수 있을까요? 따라서 첫 번째로 해야 할 일은 헤더와 배경 색상을 지정한 이 부분 사이의 공간을 없애는 것입니다. 여백과 패딩을 조작할 때는 인스펙터를 사용하는 것이 매우 유용하다는 것을 알 수 있습니다. 따라서 페이지를 검사해 보겠습니다. 이 부분을 선택해 보겠습니다. 여기에는 헤더가 있고 여기에는 본문이 있습니다. 따라서 여기에 공간이 있습니다. 좌측과 우측에 여백이 있습니다. 따라서 이 여백을 0으로 설정하면 위로 이동하게 됩니다. 따라서 하단 여백도 없애면 이제 페이지가 왼쪽과 오른쪽 끝에서 시작하게 됩니다. 그러나 다른 모든 요소들도 함께 영향을 받습니다. 따라서 이를 수정하기 위해 HTML을 추가해야 합니다. 이제 원래 상태로 돌아가기 위해 새로 고침하겠습니다. 이제 해결책을 찾기 위해 이 주요 요소에 집중해야 합니다. 이 주요 요소를 수정할 수 없으므로 페이지 내의 모든 요소에 대한 여백을 수정해야 합니다. 따라서 모든 요소에 대한 여백을 0으로 설정하고 실제로 여기를 선택하고 새로 고침하여 결과를 확인하겠습니다. 이제 이것을 제거했지만 이 주요 콘텐츠를 여기에 두고 싶지 않습니다. 즉, 페이지의 테두리 옆에 있는 것이 아니라 분리하고 싶습니다. 어떻게 할 수 있을까요? 요소의 여백을 수정할 수 없으므로 페이지 내용을 감싸는 또 다른 섹션을 추가해야 합니다. 이를 위해 이 주요 섹션을 만들 것이며, 이 주요 섹션 내부에 모든 상자와 원을 넣을 것입니다. 이를 저장하고 새로 고침하겠습니다. 따라서 이를 선택하면 이를 스타일링하기 위해 body의 모든 여백을 0으로 설정하고 모든 요소를 선택하여 여백을 0으로 설정합니다. 따라서 이를 삭제하고 새로 고침하여 결과를 확인하겠습니다. 이제 이를 수정했지만 이 주요 콘텐츠를 여기에 두고 싶지 않습니다. 즉, 페이지의 테두리 옆에 있는 것이 아니라 분리하고 싶습니다. 어떻게 할 수 있을까요? 이를 위해 body의 여백을 수정할 수 없으므로 주요 요소에 집중해야 합니다.- 메인 요소는 원과 상자의 컨테이너입니다. - 메인 요소에 너비를 지정하고 싶습니다. 90%의 너비를 주려고 합니다. 이렇게 하면 왼쪽 5%와 오른쪽 5%가 비어있을 것입니다. - 메인 요소에 자동으로 여백을 추가하여 콘텐츠를 가운데로 정렬하려고 합니다. - 네비게이션 목록 항목을 가로로 정렬하려고 합니다. - 링크의 텍스트 스타일을 변경하여 밑줄을 제거하고 크기를 키우고 싶습니다. - 링크에 배경색을 주고 싶습니다. 빨간색으로 해보겠습니다. - 링크에 패딩을 추가하여 크기를 늘리고 싶습니다. - 링크를 가운데로 정렬하려고 합니다. - 링크에 테두리를 추가하여 헤더 안에 있는 것처럼 보이도록 하려고 합니다. - 링크에 마우스 액션에 따라 스타일을 변경하고 싶습니다. 호버 및 포커스 상태에 동일한 스타일을 적용하려고 합니다. - 링크에 박스 그림자를 추가하여 3D 효과를 주려고 합니다.- 링크가 활성화되면 어떻게 될까요? 링크를 클릭하면 어떻게 될까요? 링크를 클릭하는 순간에는 알 수 없습니다. 왜냐하면 링크의 상태가 변하지 않기 때문입니다. 클릭할 때와 마우스를 올려놓았을 때와 같은 모습입니다. 그래서 이것은 좋지 않습니다. 링크가 활성화될 때 상태를 변경하고 싶습니다. 그래서 그냥 클릭할 때 그림자를 제거하겠습니다. 버튼을 누른 것처럼 보이도록 말이죠. 그래서 활성화될 때 이것을 사용할 것입니다. 활성화될 때 박스 그림자는 필요하지 않습니다. 그래서 일반적인 스타일을 유지하겠습니다. 새로 고침해봅시다. 이제 클릭할 때 버튼이 눌린 것처럼 내려갑니다. 클릭하면 다시 올라갑니다. 그림자만 있을 뿐입니다. 그런데 이것을 클릭한 후에도 그림자가 남아있습니다. 이는 포커스 상태를 유지하기 때문입니다. 클릭한 후에 다른 곳을 클릭하면 그림자가 제거됩니다. 실제로 이것은 마음에 들지 않습니다. 그래서 포커스를 제거하겠습니다. 그래서 이제 클릭할 때 마우스를 올려놓지 않은 상태에서 그림자가 없습니다. 맞죠? 탭을 누르면 이렇게 흰색이 나타납니다. 그래서 이에 대해 다른 스타일을 적용할 수 있습니다. 예를 들어, 호버 상태일 때 굵게 만들 수 있습니다. 그래서 글꼴 두껍게를 적용해보겠습니다. 그리고 이것을 호버 위에 배치하겠습니다. 이렇게 저장하고 새로 고침해봅시다. 이렇게 호버할 때와 탭으로 포커스한 상태가 다릅니다. 그래서 괜찮다고 생각합니다. 그럼 이 페이지를 조금 바꿔보겠습니다. 이제 메뉴는 끝났다고 생각합니다. 그러면 이 원을 가운데로 이동하겠습니다. 어떻게 할 수 있을까요? 이것은 블록 요소입니다. 그래서 이 블록 요소를 이동하기 위해서는 text-align을 사용할 수 없습니다. 왜냐하면 이것은 body 요소에서 멀리 떨어져 있어야 하기 때문입니다. 그래서 margin 속성을 사용하여 이동하겠습니다. 그래서 이 원으로 이동하겠습니다. 이미 여기에 있습니다. 이 원에 마진을 주겠습니다. 위 아래는 0으로 주고, 왼쪽과 오른쪽은 auto로 주겠습니다. 이제 가운데에 있습니다. 그리고 실제로 이곳에 상자와 비슷한 형태의 목록을 추가하고 싶습니다. 그래서 메인에 추가하겠습니다. 이렇게 하면 이전에 있던 코드를 복사할 수 있습니다. 시간이 많지 않으니까요. 이렇게 있습니다. 그런데 이제 실제로 이 목록을 스타일링하고 싶습니다. 그런데 이것은 ID입니다. 그러니까 그렇게 할 수 없습니다. 맞죠? 그래서 이 상자에서 클래스로 바꾸겠습니다. box2라는 클래스로 만들겠습니다. box2는 클래스가 될 것입니다. 그러면 ID로 선택되었던 모든 곳을 클래스로 변경해야 합니다. 그렇게 할까요? box2는 클래스입니다. 어디에 있을까요? 그게 다입니다. 이제 이렇게 새로 고침해봅시다. 이렇게 생겼습니다. 이것은 너무 가깝지 않나요? 그래서 조금 여백을 주겠습니다. 그래서 그 요소로 이동하겠습니다. 원래는 여기에 있었죠. 여기에 아래쪽에 여백을 주겠습니다. 위쪽은 0으로 주고, 왼쪽과 오른쪽은 2rem으로 주겠습니다. 이렇게 보입니다. 이제 이 목록을 형식화해야 합니다. 실제로 이 목록을 어떻게 참조할 수 있을까요? 이것은 순서 없는 목록 내의 목록 항목입니다. 그래서 이를 위해 선택자를 만들어보겠습니다. 또한, 이 목록 항목과 이 순서 없는 목록은 box2에 있습니다. 그래서 그에 따라 스타일을 적용할 수 있습니다. 예를 들어, box2라는 클래스 안에 있는 순서 없는 목록이라면 이 속성들을 가질 것입니다. 먼저 이 불릿을 제거하겠습니다. 그래서 list-style을 none으로 설정하겠습니다. 이제 무엇을 할 수 있을까요? 의사 요소 선택자를 사용하겠습니다. 그리고 실제로 이 목록에서 모든 짝수 요소를 선택하고 어떤 다른 스타일을 부여하려고 합니다. 그래서 순서 없는 목록 내의 목록 항목을 선택하고 배경색을 회색으로 지정하고 글꼴 색상을 흰색으로 변경하겠습니다. 좋습니다. 모두 선택됩니다. 그렇게 할 필요가 없습니다. 일부만 선택하려고 합니다. 그래서 구조적 의사 클래스 선택자를 사용할 수 있습니다. 이는 DOM의 구조에 기반한 의사 클래스입니다. 즉, 위치에 따라서 그룹화된 요소입니다. 그래서 짝수인 목록 항목을 선택하려고 합니다. 2, 4, 6입니다. 이렇게 저장하고 새로 고침해봅시다. 이런 식으로 목록이 생겼습니다. 꽤 멋지게 보이죠? 그런데 이것을 테두리 옆에 두고 싶지 않습니다. 그래서 여기에 어떤 여백을 줄 것입니다. 그래서 이 요소로 이동하겠습니다. 이것이 우리의 목록 항목입니다. 그래서 여기에 어떤 여백을 줄 것입니다. 1000으로 보겠습니다. 그리고 이렇게 이동됩니다. 그래서 이 웹 페이지는 우리가 배운 내용을 연습하고 디모를 보여주기 위해 사용될 것입니다. 그냥 계속 진행하겠습니다. 여기서 비디오를 끝내겠습니다. 그리고 뉴스 슬라이드에서 새로운 주제로 새 비디오를 시작하겠습니다. 안녕히 계세요.",
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
    if (title) {
      (async () => {
        /*  const json = await (
          await fetch(`http:// /summary/${title}`, {
            method: "GET",
            mode: "cors",
          })
        ).json();
        setSummary(json.result); */
      })();
    }
  }, [title]);

  const onClick = () => {
    router.push("/");
  };

  return (
    <div className="absolute left-0 top-0 flex h-full min-h-screen w-full justify-center">
      <div
        className="z-30 h-full w-full bg-[rgba(0,0,0,0.7)]"
        onClick={onClick}
      ></div>
      <div className="absolute z-50 h-full w-full max-w-5xl overflow-scroll scroll-smooth bg-white px-10 py-5 scrollbar-none sm:top-[5%] sm:h-[95%] sm:w-10/12 sm:rounded-t-3xl sm:p-10">
        <div className="flex h-[5%] items-center justify-between">
          <div className="flex gap-1 font-bold">
            <span>[{title}]</span>
            <span>{videoId}</span>
          </div>
          <button onClick={onClick}>
            <Image src={"/close.png"} alt="" width={32} height={32} />
          </button>
        </div>
        {/* <iframe
          width="560"
          height="315"
          src=""
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; auto"
        ></iframe> */}
        {hasWindow ? (
          <div className="mt-5 h-[30%] overflow-hidden rounded-lg ring ring-ringColor">
            <ReactPlayer
              url={[`https://www.youtube.com/embed/${videoId}`]}
              controls
              width={"100%"}
              height={"100%"}
            />
          </div>
        ) : null}
        <div className="mt-5 h-3/5 w-full rounded-lg bg-[#F5F5F5] p-0.5 pb-5 ring ring-ringColor sm:h-3/5">
          {summary ? (
            <div className="h-full">
              <QuerySummary summary={summary} />
              <div className="m-3 border-t border-[#939393]" />
              <QueryChat />
            </div>
          ) : (
            <span>Loading..</span>
          )}
        </div>
      </div>
    </div>
  );
}
