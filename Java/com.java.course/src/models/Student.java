package models;

public class Student {
	private String studnetName;
	private int age;
	private String IDNum;
	
	public Student(String studnetName, int age, String iDNum) {
		super();
		this.studnetName = studnetName;
		this.age = age;
		this.IDNum = iDNum;
	}
	
	public String getStudnetName() {
		return studnetName;
	}
	
	public void setStudnetName(String studnetName) {
		this.studnetName = studnetName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getIDNum() {
		return IDNum;
	}
	public void setIDNum(String iDNum) {
		IDNum = iDNum;
	}
	
	
}
