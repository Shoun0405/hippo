const listOfGoods = [
    
    {
        employeeId:1,
        id:1,
        name:'Mac Book 16-inch',
        amount:200,
        prices:{
            defaultPrice:26676000,
            priceBulk:26000000
        }
    },
    {
        employeeId:1,
        id:2,
        name:'Iphone 14 pro',
        amount:200,
        prices:{
            defaultPrice:10651000,
            priceBulk:10000000
        }
    },
    {
        employeeId:1,
        id:3,
        name:'Iphone 14 pro max',
        amount:200,
        prices:{
            defaultPrice:20260000,
            priceBulk:20000000
        }
    },
    {
        employeeId:2,
        id:4,
        name:'Mac Book 16-inch',
        amount:200,
        prices:{
            defaultPrice:26676000,
            priceBulk:26000000
        }
    },
    {
        employeeId:3,
        id:5,
        name:'Iphone 14 pro',
        amount:200,
        prices:{
            defaultPrice:10651000,
            priceBulk:10000000
        }
    },
    {
        employeeId:4,
        id:6,
        name:'galaxy S22 Ultra',
        amount:200,
        prices:{
            defaultPrice:20260000,
            priceBulk:20000000
        }
    },
]

const listOfMarket = []

const listClient = [
    {
        id:1,
        name:'Xoshim Arislonov'
    },
    {
        id:2,
        name:'Mirzabek Xolmedov'
    },
    {
        id:3,
        name:'Leonel Messi'
    },
    {
        id:4,
        name:'O\'sman Dembele'
    },
    {
        id:5,
        name:'Antonio Banderes'
    },
    {
        id:6,
        name:'Lianardo Dekabrio'
    },
]

const listEmployee = [
    {
        employeeId:1,
        id:[1],
        name:'Baxrom',
        goods:[]
    },
    {
        employeeId:2,
        id:[4],
        name:'Muxtor aka',
        goods:[]
    },
    {
        employeeId:3,
        id:[3],
        name:'Ilhom aka',
        goods:[]
    },
    {
        employeeId:4,
        id:[5],
        name:'Obid aka',
        goods:[]
    },
    {
        employeeId:5,
        id:[6],
        name:'O\'zim',
        goods:[]
    },
]

listEmployee.forEach(employee => {
    const goodsOfEmployee = listOfGoods.filter(emplGood => {return emplGood.employeeId === employee.employeeId})
    .map(good => {return good})
    employee.goods.push(goodsOfEmployee)
})

export {listEmployee,listOfGoods,listOfMarket,listClient}