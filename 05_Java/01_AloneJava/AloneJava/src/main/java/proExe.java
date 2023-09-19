import programmers.Page1112;

/**
 * packageName : PACKAGE_NAME
 * fileName : proExe
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
public class proExe {
    public static void main(String[] args) {
        Page1112 page1112 = new Page1112();
//        page1112.exam01();
//        page1112.exam02();
//        String result = page1112.exam02("jaron");
//        System.out.println(result);
//        int[] num = {1,2,3,4};
        String result = page1112.exam03(new int[]{1, 2, 3, 4, 5});
        System.out.println(result);
    }
}
