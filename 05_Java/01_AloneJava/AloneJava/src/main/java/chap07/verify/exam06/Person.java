package chap07.verify.exam06;

/**
 * packageName : chap07.verify.exam0104
 * fileName : Person
 * author : kangtaegyung
 * date : 2023/03/30
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/30         kangtaegyung          최초 생성
 */
public class Person {
    String name;
    String id;

    public Person() {}

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setId(String number){
        this.id = id;
    }
    public String getId(){
        return id;
    }
}
