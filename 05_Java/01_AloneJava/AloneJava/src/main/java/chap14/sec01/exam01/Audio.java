package chap14.sec01.exam01;

/**
 * packageName : jungsuk.chap12
 * fileName : Audio
 * author : kangtaegyung
 * date : 2023/04/05
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/04/05         kangtaegyung          최초 생성
 */
public class Audio extends Product {
    String name = "동성 Audio";

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Audio{" +
                "name='" + name + '\'' +
                '}';
    }
}
