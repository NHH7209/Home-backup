package programmers;

import java.util.Arrays;
import java.util.Scanner;

/**
 * packageName : programmers
 * fileName : page11and12
 * author : GGG
 * date : 2023-09-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Page1112 {


    //      직각삼각형 출력하기
    public void exam01() {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        String result = "";
        for (int i = 0; i < num; i++) {
            result = result + "*";
            System.out.println(result);
        }
    }

    //        문자열 뒤집기
    public String exam02(String my_string) {
        String answer = "";
        String[] sp = my_string.split("");
        for (int i = sp.length - 1; i > -1; i--) {
            answer += sp[i];
        }
        return answer;
    }

    //    배열 뒤집기
    public int[] exam03(int[] num_list) {
        int[] answer = new int[num_list.length];

        for (int i = 0; i < num_list.length; i++) {
            answer[i] = num_list[num_list.length - 1 - i];
        }
        return answer;
    }

    //    나이 출력
    public int exam04(int age) {
        int answer = 0;
        answer = 2023 - age;
        return answer;
    }

    // 아이스 아메리카노
    public int[] exam05(int money) {
        int[] answer = new int[2];
        answer[0] = money / 5500;
        answer[1] = money % 5500;
        return answer;
    }

    // 옷가게 할인 받기
    public int exam06(int price) {
        int answer = 0;
        if (price >= 500000) {
            answer = (int) (price - (price * 0.2)); // 20% 할인
        } else if (price >= 300000) {
            answer = (int) (price - (price * 0.1)); // 10% 할인
        } else if (price >= 100000) {
            answer = (int) (price - (price * 0.05)); // 5% 할인
        } else {
            answer = price;
        }
        return answer;
    }

    // 배열의 평균값
    public double exam07(int[] numbers) {
        double sum = 0;
        double avg = 0;
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        avg = sum / numbers.length;
        return avg;
    }


    // 피자 나눠 먹기 (3)
    public int exam08(int slice, int n) {
        int result = 0;
        int x = 0;
        x = n % slice;
        if (x > 0) {
            result = n / slice + 1;
        } else
            result = n / slice;

        return result;
    }

    // 피자 나눠 먹기 (2)
    public int exam09(int n) {
        int answer = 0;
        for (int i = 1; i <= (6 * n); i++) {
            if ((i * 6) % n == 0) {
                answer = i;
                break;
            }
        }
        return answer;
    }

    //    피자 나눠 먹기 (1)
    public int exam10(int n) {
        int answer = 0;
        int quotient = 0;
        int remainder = 0;
        quotient = n / 7;
        remainder = n % 7;
        if (remainder != 0) {
            quotient++;
        }
        answer = quotient;
        return answer;
    }

    //    짝수는 싫어요
    public int[] exam11(int n) {
        int[] answer = new int[(n + 1) / 2];
        int count = 0;
        for (int i = 1; i <= n; i += 2) {
            if (i % 2 != 0) {
                answer[count] = i;
                count++;
            }
        }
        return answer;
    }

// 최빈값 구하기 //TODO : 아직 못품
//public int exam12(int[] array) {
//    int[] answer = new int[array.length];
//    int count = 0;
//    int count2 = 0;
//    int max = 0;
//
//    for(int i = 0; i < array.length; i++){
//        for(int j = 0; j < array.length; j++){
//            if(answer[i] == answer[j]){
//                count++;
//            }
//        }
//        answer[i] = count;
//        if(max <= answer[i]){
//            max = answer[i];
//        }else{
//            max = max;
//        }
//    }
//    return max;
//}

    // 중앙값 구하기
    public int exam13(int[] array) {
        int middle;
        middle = array.length / 2;
        Arrays.sort(array);
        return array[middle];
    }

    // 나머지 구하기
    public int exam14(int num1, int num2) {
        int answer = 0;
        answer = num1 % num2;
        return answer;
    }

    // 배열 두배 만들기
    public int[] exam15(int[] numbers) {
        int[] answer = new int[numbers.length];
        for(int i = 0; i < answer.length; i++){
            answer[i] = numbers[i] * 2;
        }
        return answer;
    }

    // 분수의 덧셈 아직 못품!!!
//    public int[] exam16(int numer1, int denom1, int numer2, int denom2) {
//        int[] answer = new int[2];
//        int denominator = 0; // 분모
//        int molecule = 0;    // 분자
//        int change1 = 0;
//        int change2 = 0;
//
//        change1 = numer1 * denom2;
//        change2 = numer2 * denom1;
//
//        molecule = change1 + change2;
////        for(int i = 0; i < )
////        if((molecule % 2 == 0)&&(denominator % 2 == 0)){
////
////        }
//
//        answer[0] = molecule;
//        answer[1] = denominator;
//
//        return answer;
//    }

    // 숫자 비교하기
    public int exam17(int num1, int num2) {
        int answer = 0;
        if(num1 != num2){
            answer = -1;
        }else {
            answer = 1;
        }
        return answer;
    }

    // 두 수의 나눗셈
    public int exam18(int num1, int num2) {
        int answer = 0;
        answer = (int)(((double)num1 / (double)num2) * 1000);

        return answer;
    }

    // 몫 구하기
    public int exam19(int num1, int num2) {
        int answer = 0;
        answer = num1 / num2;
        return answer;
    }


    // 두 수의 곱
    public int exam20(int num1, int num2) {
        int answer = 0;
        answer = num1 * num2;
        return answer;
    }

    // 두 수의 차
    public int exam21(int num1, int num2) {
        int answer = 0;
        answer = num1 - num2;
        return answer;
    }

    // 두 수의 합
    public int exam22(int num1, int num2) {
        int answer = 0;
        answer = num1 + num2;
        return answer;
    }

    // 머쓱이보다 키 큰 사람
    public int exam23(int[] array, int height) {
        int answer = 0;
        for(int i = 0; i < array.length; i++){
            if(height < array[i]){
                answer++;
            }
        }
        return answer;
    }

    // 중복된 숫자 개수
    public int exam24(int[] array, int n) {
        int answer = 0;
        for(int i = 0; i < array.length; i++){
            if(array[i] == n){
                answer++;
            }
        }
        return answer;
    }


}
