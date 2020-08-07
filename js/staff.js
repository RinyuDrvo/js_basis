// 会社オブジェクト
let company = {
  sales: [
    {
      name: 'John',
      salary: 1000
    },
    {
      name: 'Alice',
      salary: 600
    }
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000
      },
      {
        name: 'Alex',
        salary: 1800
      },
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300
      },
      {
        name: 'Rinyu',
        salary: 370
      },
    ]
  }
};

// 再帰で社員を掘り下げて給料を総合計
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // 配列の合計
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

const button = document.getElementById('button');
button.onclick = function () {
  // 出力
  alert(sumSalaries(company));
}
