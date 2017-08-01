

/*

* float 프로퍼티는 주로 layout을 구성하기 위한 핵심 기술.
* layout의 가장 큰 목적은 1개 이상의 요소를 원하는 위치에 정렬시키는 것.
* float
    * none
        * 요소를 떠 있게 하지 않는다 (기본값)
    * right
        * 요소를 오른쪽으로 이동시킨다
    * left
        * 요소를 왼쪽으로 이동시킨다
    * block 요소에 float을 주면 inline 요소처럼 수평 정렬된다.
    * 중앙 정렬은 margin 을 이용해서 한다.
        * margin: 0 auto;
    * float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 margin 이 사라지는 문제
        *
        * float: left 되어있는 요소과 왼쪽에 부유한 상태
        * 해결법
            * float 프로퍼티가 선언되지 않은 요소에
                * overflow: hidden
            *



*/
