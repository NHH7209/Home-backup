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


    //  직각삼각형 출력하기
//    public void exam01() {
//        Scanner sc = new Scanner(System.in);
//        int num = sc.nextInt();
//        String result = "";
//        for (int i = 0; i < num; i++) {
//            result = result + "*";
//            System.out.println(result);
//        }
//    }

    //    문자열 뒤집기
//    public String exam02(String my_string) {
//        String answer = "";
//        String[] sp = my_string.split("");
//        for(int i = sp.length-1; i > -1; i--){
//            answer += sp[i];
//        }
//        return answer;
//    }


    public String exam03(int[] num_list) {
        int[] answer = num_list;
        int[] answer3 = new int[num_list.length];

        for(int j = 0; j < answer3.length; j++){
            answer3[j] = answer[j];
        }

        for(int i = 0; i < 5; i++){
            answer[i] = answer3[4-i];
        }

        String answer2 = Arrays.toString(answer);
        return answer2;
    }


}
