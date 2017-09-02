터미널을 개발로 좀 더 편하게 사용하기 위하여 bash 대신 oh-my-zsh 을 사용하겠음.

iTerm2 를 먼저 설치하자.

우분투의 APT 와 비슷하게 프로그램 패키지를 관리해주는 HomeBrew 를 이용하자.
$ brew 라는 명령어로 패키지를 관리할 수 있다.

설치
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew 하면 반응한다.

zsh 은 bash 에 추가적인 명령어를 추가하고 편의성을 제공.

HomeBrew를 이용해 zsh 을 설치하자
$ brew install zsh

oh-my-zsh 은 zsh 을 좀 더 편리하게 사용할 수 있게 하는 플러그인.
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

설치하고 나면 터미널이 bash 에서 zsh 이 된것을 확인할 수 있다.

Oceanic-Next.itermcolors 색 테마로 바꾸기 위해서 설치하고 iTerm2 => preferences => profiles => default => colors => color presets 를 Oceanic-Next 로 바꾸고 종료후 재 실행.

atom으로 .zshrc 열고
ZSH_THEME="agnoster" 로 수정

-글씨가 깨진다.
 Ubuntu_Mono_derivative_Powerline.ttf 다운설치

iTerm2 preferences => profiles => default => text => change font => 고정폭 , Ubuntu_Mono_derivative_Powerline 설정

- zsh-syntax-highlighting 설치하기
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
$ echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc

완료!!
