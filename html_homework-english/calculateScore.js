/**
 * author: Hans
 * date: 2020/6/5
 */

// 正确的答案列表 
let testCorrectAnswerList = {
    "1-1": {
        value: "Unified Modeling Language",
        score: 5
    },
    "1-2-1": {
        value: "Encapsulation",
        score: 5
    },
    "1-2-2": {
        value: "Inheritance",
        score: 5
    },
    "1-2-3": {
        value: "Polymorphhism",
        score: 5
    },
    "2-1": {
        value: "B",
        score: 10
    },
    "2-2": {
        value: "A",
        score: 10
    },
    "3-1": {
        value: "ABD",
        score: 10
    },
    "3-2": {
        value: "ABC",
        score: 10
    },
    "4-1": {
        value: "F",
        score: 10
    },
    "4-2": {
        value: "T",
        score: 10
    }
}

//提交表单
$('#submitForm').click(function (e) {
    //阻止默认提交
    e.preventDefault();
    //表单序列化，得到数组
    let data = $("form").serializeArray();
    console.log(data);
    let obj = {}
    for(let i of data) {
        obj[i.name] ? obj[i.name] += i.value : obj[i.name] = i.value
    }
    let score = calculateScore(obj);
    console.log("当前分数为：" + score);
    showTestResult(obj, testCorrectAnswerList, score);
})

// 计算分数
function calculateScore(data) {
    console.log(data)
    let score = 0;
    if(data["5-1"] !== "") {
        score = 20;
    }
    for(let i in testCorrectAnswerList) {
        if(testCorrectAnswerList[i].value === data[i]) {
            score += testCorrectAnswerList[i].score
        }
    }
    return score;
}

// 展示测试结果
function showTestResult(yourAnswer, correctAnswer, score) {
    let tbody = "";
    for(let i in correctAnswer) {
        tbody += `<tr>
            <td>${i}</td>
            <td>${yourAnswer[i]}</td>
            <td>${correctAnswer[i].value}</td>
            <td>${yourAnswer[i] === correctAnswer[i].value ? correctAnswer[i].score : 0}</td>
        </tr>`
    }
    let dom = `<div style="color: red">Score:${score}</div>
        <button onclick="window.location.reload()">Try again</button>
        <table border="1">
            <thead>
                <th>Title</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Score</th>
            </thead>
            <tbody>${tbody}</tbody>
        <table>`;
    $("form").after(dom);
} 