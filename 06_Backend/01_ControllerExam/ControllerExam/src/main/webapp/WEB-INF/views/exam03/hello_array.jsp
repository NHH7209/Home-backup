<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%--TODO: jstl 표현식 사용을 위한 import --%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <%-- bootstrap css cdn   --%>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

</head>
<body>
<div class="container">
    <h2>예제2 : URL 매개변수를 ArrayList 로 View 에 전달</h2>
    <%-- TODO: el(Experssion language) 표현식 : ${변수명}  --%>
    <p>${list}</p>

    <table class="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <%--        TODO: jsp 반복문 : jstl 표현식   --%>
            <%--           <c:forEach var="일반변수" items="${배열}"> --%>
            <c:forEach var="data" items="${list}">
                <td>${data}</td>
            </c:forEach>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>