package services;
import models.*;

public class Main {
	public static void main(String[] args) {
		Student student = new Student("Hans", 22, "1010055");
		System.out.println("ѧ������" + student.getStudnetName());
		System.out.println("ѧ������" + student.getAge());
		System.out.println("ѧ��ѧ��" + student.getIDNum());
	}
}
