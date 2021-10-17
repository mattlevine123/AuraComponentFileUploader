@isTest
public with sharing class FileUploaderControllerTest {
    @isTest
    public static void fileuploadTest(){
        list<String> sL = new list<String>{'1', '2', '3', '4'};
        FileUploaderController.getFiles(sL);
        FileUploaderController.deleteFiles('1234');
    }
}