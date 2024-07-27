const set1 = new Set();
const set2 = new Set();

function addToSet(set, inputId) {
    const inputElement = document.getElementById(inputId);
    const values = inputElement.value.trim().split(" ");

    for (const value of values) {
        if (value !== "") {
            set.add(value);
        }
    }

    inputElement.value = ""; // 清空输入框
    displaySetElements();
}

function displaySetElements() {
    const set1ElementsContainer = document.getElementById("set1Elements");
    const set2ElementsContainer = document.getElementById("set2Elements");

    // 清空元素容器
    set1ElementsContainer.innerHTML = "";
    set2ElementsContainer.innerHTML = "";

    // 显示集合1的元素
    for (const element of set1) {
        const listItem = document.createElement("span");
        listItem.textContent = element  + " ";
        set1ElementsContainer.appendChild(listItem);
    }

    // 显示集合2的元素
    for (const element of set2) {
        const listItem = document.createElement("span");
        listItem.textContent = element + " ";
        set2ElementsContainer.appendChild(listItem);
    }
}

function showCalculation() {
    const calculationContainer = document.getElementById("calculationContainer");
    calculationContainer.style.display = "flex"; // 显示计算区域
    calculateAndDisplay();
}

function calculateAndDisplay() {
    const intersectionSet = new Set();
    const unionSet = new Set(set1);
    const differenceSet = new Set();

    for (const element of set2) {
        if (set1.has(element)) {
            intersectionSet.add(element);
        }
        unionSet.add(element);
    }

    for (const element of set1) {
        if (!set2.has(element)) {
            differenceSet.add(element);
        }
    }

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // 清空结果容器

    // 创建并添加交集结果
    const intersectionTitle = document.createElement("h3");
    intersectionTitle.textContent = "交集：";
    resultContainer.appendChild(intersectionTitle);
    const intersectionList = document.createElement("span");
    for (const element of intersectionSet) {
        const listItem = document.createElement("span");
        listItem.textContent = element + " ";
        intersectionList.appendChild(listItem);
    }
    resultContainer.appendChild(intersectionList);

    // 创建并添加并集结果
    const unionTitle = document.createElement("h3");
    unionTitle.textContent = "并集：";
    resultContainer.appendChild(unionTitle);
    const unionList = document.createElement("span");
    for (const element of unionSet) {
        const listItem = document.createElement("span");
        listItem.textContent = element + " ";
        unionList.appendChild(listItem);
    }
    resultContainer.appendChild(unionList);

// 创建并添加对称差集结果
const symmetricDifferenceTitle = document.createElement("h3");
symmetricDifferenceTitle.textContent = "对称差集：";
resultContainer.appendChild(symmetricDifferenceTitle);
const symmetricDifferenceList = document.createElement("span");

// 计算对称差集
const symmetricDifferenceSet = new Set([...set1, ...set2].filter(element => !(set1.has(element) && set2.has(element))));

for (const element of symmetricDifferenceSet) {
    const listItem = document.createElement("span");
    listItem.textContent = element + " ";
    symmetricDifferenceList.appendChild(listItem);
}

resultContainer.appendChild(symmetricDifferenceList);

// 创建并添加相对补集结果
const relativeComplementTitle = document.createElement("h3");
relativeComplementTitle.textContent = "相对补集 (集合A - 集合B)：";
resultContainer.appendChild(relativeComplementTitle);
const relativeComplementList = document.createElement("span");

// 计算相对补集
const relativeComplementSet = new Set([...set1].filter(element => !set2.has(element)));

for (const element of relativeComplementSet) {
    const listItem = document.createElement("span");
    listItem.textContent = element + " ";
    relativeComplementList.appendChild(listItem);
}

resultContainer.appendChild(relativeComplementList);


}