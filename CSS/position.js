/*


1. position
    * static
    * relative
    * absolute
    * fixed
2. z-index
3. overflow
    1. visible
    2. hidden
    3. scroll
    4. auto
* position
    * 요소의 위치를 정의한다.
    * top, bottom, left, right 속성과 함께 사용하여 위치를 지정한다.
    * static
        * static은 position 속성의 기본값으로 position 속성을 지정하지 않을 때와 같다.
        * 기본적으로 이 속성값을 지정할 일은 없지만 이미 설정된 position 을 무력화하기 위해 사용될 수 있다.
        * 좌표속성 (top, button, left, right) 을 같이 사용할 수 없으며 무시된다.
    * relative
        * 기본 위치(static)를 기준으로 좌표속성 (top, button, left, right) 을 사용하여 위치를 이동시킨다.
    * absolute
        * relative, absolute, fixed 속성이 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정됨.
        * 만일 부모가 static인 경우 document body를 기준으로 함.
        * 따라서 부모 요소를 배치의 기준으로 삼기 위해서는 부모 요소에 absolute, relative, fixed 속성을 정의해야 한다.
        * absolute 속성 선언 시, block 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 주의.
        * +
            * margin
                * 순서대로 top, right, bottom, left
                *
        * relative 속성과 absolute 속성의 차이점
            * relative 속성은 static을 기준으로 좌표속성 (top, button, left, right)을 사용하여 위치를 이동시킨다.
            * 따라서 무조건 부모를 기준으로 위치하게 된다.
            * absolute 속성은 부모 static 이외의 position 속성이 지정되어 있을 경우에만 위치한다.
    * fixed
        * 부모 요소와 관계없이 브라우저의 viewport를 기준으로 좌표속성 (top, button, left, right) 을 사용하여 위치를 이동시킨다.
        * 스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.
        * fixed 속성 선언 시, block 요소의 width는 inline 요소와 같이 content 에 맞게 변화됨.
* z-index
    * position이 static 이외인 요소에만 적용된다.
    * 큰 숫자값을 지정할수록 화면 전면에 출력된다.
* overflow
    * 자식 요소가 부모 요소의 영역을 벗어났을 때 처리방법
        * visible
            * 영역을 벗어난 부분을 표시한다
        * hidden
            * 영역을 벗어난 부분을 잘라내어 보이지 않게 한다
        * scroll
            * 스크롤 표시
        * auto
            * 스크롤 표시


*/
