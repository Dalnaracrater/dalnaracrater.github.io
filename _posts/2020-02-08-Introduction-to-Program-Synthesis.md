---
title: "Intruduction to Program Synthesis"
date: 2020-02-08 05:24:00 -0400
categories: Research
---
Intruduction to Program Synthesis
=================================

1. Program Synthesis
 컴파일러와 달리 program synthesizer는 여러 제약조건들을 만족하는 program space를 탐색한다.   
 Deductive synthesis approach는 사용자의 의도에 맞게 formal specification이 제공된다고 가정하는데 이것은 프로그램을 직접 작성하는 것 만큼이나 복잡한 일이다. 이러한 이유 때문에 input-output 예제 등을 기반으로 한 inductive synthesis approach가 등장하게 된다.   
 최근 들어서는 사용자가 specification과 더불어 program space의 skeleton(grammer)를 제공할 수 있게 해준다. 이로 인해 검색 절차를 효율적으로 할 수 있도록 hypothesis space에 구조를 제공해주고, grammer로부터 파생되기 때문에 학습된 프로그램은 좀 더 이해하기 쉬워진다.   

2. Challenges
주요 문제점 : Program space의 intractability, diversity of user intent.   

- Program Space
 Program synthesis는 undecidable하기 때문에 program space를 탐색하여 합성을 진행한다. 이러한 탐색은 결국 조합문제이다.   
 초기에는 deductive method와 transformational method이 중심이 되었다. 이러한 방법들은 지수적으로 증가하는 theorem-proving deductive inference tree와 correctness-preserving code rewrite rules를 기반으로 하고있다. 그러나 두 방법들은 제대로 동작하는 코드를 생성할 수는 있지만 non-deterministic nature of a theorem proving과 code rewriting loop는 효율성을 보장해주지 않을 뿐더러 종료도 제대로 되지 않을 수 있다. 이런 이유로 최근에는 clever domain specific heuristic for cutting down the derivation tree를 사용한다.   
 Moore’s law와 constraint solving의 발전으로 program space를 합리적인 시간 안에 큰 규모의 공간을 탐색할 수 있도록 하였다. 그러나 현대의 program synthesis 기술은 작은 코드 밖에 생성해내지 못하는 단점을 갖고 있어 실제 산업에서 적용되는 경우는 적다.   

- User Intent
두번째 과제는 사용자의 의도를 정확히 표현하는 것이다. 사용자 의도를 표현하는 방법에 있어서는 formal specification부터 informal nature-language description, input-output 예제까지 다양하게 존재한다.   
 프로그램 합성에 대한 실제 application domain은 formal 또는 informal specification으로 표현하기에는 꽤 복잡하다. 그래서 이런 specification이 생성된 프로그램에 비해 너무 구체적이거나, 사용자가 모든 범위를 생각하지 않는 경우가 많은 등의 어려움이 존재한다. 이러한 경우 프로그램 합성을 큰 산업에 적용하는 것을 human-computer interaction(HCI)로도 생각해 볼 수 있다.   

3. Dimensions in Program Synthesis
key dimensions
* 사용자의 의도를 표현할 constraints 종류
* 탐색할 program space
* 적용될 search technique

3.1 User Intent
사용자의 의도는 logical specification, examples, traces, natural language, partial program 등의 다양한 형태로 표현될 수 있고, 시나리오, 사용 기술, 사용자의 배경지식 등에 따라 선택하면 된다.   
Logical specification은 프로그램의 입출력 값 간의 논리적 관계를 말한다.   
Example based specification에 내재되어있는 모호함을 해소하기 위해, 사용자와 interactive loop를 이용할 수 있다.   
Trace는 주어진 입력 값에 대하여 한 단계씩 프로그램이 어떻게 동작해야 하는지를 묘사한 것이다. 또한 단순히 입력 값이 어떤 출력 값으로 매핑되는 것만 설명한 것이 아니라, 특정 입력 값이 어떤 출력 값으로 어떻게 바뀌는지, 그 과정을 설명하기 때문에 trace는 input-output 예제보다 더 자세한 묘사 방법이다. 이는 synthesizer의 관점에서 보면 input-output 예제보다 더 많은 정보를 제공하고, 사용자의 관점에서 더 자세한 묘사를 제공한다.   
since it also illustrates how a specific input should be transformed into the corresponding output as opposed to just describing what the output should be.   

3.2 Search Space
Search space는 표현력과 효율성 간의 균형을 잘 유지하여야 한다. Space는 domain과 다양한 프로그램들을 포함할 수 있을 만큼 크고, 표현력이 좋아야 하며, program의 space는 효율적인 탐색을 위해서 다소 제한적이어야 한다.

3.3 Search Techniques
- Enumerative
 Search space에 있는 프로그램들을 나열하여 constraint를 만족하는지 아닌지를 확인한다. 보통 일반적인 enumerative search는 scale하지 않기 때문에 ordering이나 pruning 등의 최적화 방법을 이용한다.

- Deductive
 Deductive top-down searching은 divide-and-conquer technique을 이용한다. Enumerative searching과 달리 출력 값으로부터 역방향으로 programmatic path를 탐색한다. F(e1,e2)

- Constraint Solving
 Constraint solving은 constraint generation과 constraint resolution 두 단계로 나뉜다.   
 Constraint generation은 logical constraint를 생성하는 과정으로 invariant-based, path-based, and input-based constraint generation이 있다.   
 Constraint resolution은 second-order unknown과 universal quantifier를 포함한다. 일반적으로는 먼저 second-order unknown을 first-order unknown으로 reduce한 뒤 universal quantifier를 제거한다. 그런 다음 SMT solver를 이용하여 first-order quantifier-free constraint를 풀어낸다.   

- Statistical
+ 머신러닝은 Enumerative search나 deduction에 확장하여 쓰일 수 있다. 이때 likelihood가 제공되어 함수로 input-output example에 쓰일 수 있다.

+ genetic programming
biological evolution에 영감을 받았다.   
개별 프로그램의 수를 유지하고 이를 biological mutation과 crossover를 통해 다른 프로그램을 만들어낸다. mutation은 random changes를 만들어내는 반면 crossover는 진화된 프로그램들 간의 쓸만한 코드 조각들을 공유한다. user-defined fitness function을 통해 변이의 적합성을 판단한 뒤 선택된 코드들만을 evolution에 계속 참여시킨다. 이 함수를 잘 사용해야 성공함. mutual exclusion algorithms을 발견하고 imperative programs의 버그를 고치는데 사용된다.   

+ MCMC( Markov Chain Monte carlo ) sampling
주어진 후보들로부터 원하는 프로그램을 찾는데 사용되며 cost metric for Boolean constraint에 의해 좌우된다.   

**Future Work.**
- Debuggability
명세를 개선하는데 도움을 줄 수 있다.   
The user would require active assistance to refine the specification.   
sensitive data, large amount data where the result are not easy to verify manually.   
- Multi-modal input
다각화된 입력을 통해서 단순히 문법적으로 올바른 명령어들을 구성하는 것을 뛰어 넘는다. Multi-modal natural input을 받아 명령형 프로그래밍을 할 수도 있고, examples, demonstrations, natural language, keywords, and sketches 등을 통해 intent를 표현할 수 있다.   
 - Adapability
과거에 합성되었던 데이터를 통해 사용자의 under specification에 대한 모호함을 좀 더 효과적으로 해결할 수 있다.   
- Statistical techniques
semantic knowledge나 다양한 연산자 속성에 좋지만, scalability challenge문제가 남아있다. 다양한 종류의 artifact를 예측하는데 있어 딥러닝 방법에 큰 발전이 있었다. 큰 규모의 코드를 합성하거나 추론하는데 사용될 수 있다.   
- Scaling
현재는 복잡한 논리를 갖는 작은 코드를 합성할 수 있다.   
- Knowledge transfer
하나의 도메인으로부터 얻은 것들을 다른 도메인으로 자동으로 일반화하고 전달할 수 있다.   
- Industrialization
대중화하는 것. 상대적으로 신기술이고 프로그램 분석과 달리 널리 알려져있지 않다. 프레임워크, solver-aided language, domain-specific search components의 분리에 대한 합성의 발전이 이러한 갭을 줄여줄 것이다.   

