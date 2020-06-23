package services;
import models.*;

public class Main {
	public static void main(String[] args) {
		Student student = new Student("Hans", 22, "1010055");
		System.out.println("学生姓名" + student.getStudnetName());
		System.out.println("学生年龄" + student.getAge());
		System.out.println("学生学号" + student.getIDNum());
	}
}
