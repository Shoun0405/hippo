class NewMarket{
    constructor(client,goods,amount,createdDate,priceMarket,priceBulk,pricePurchesed){
        this.barCode = Date.now()
        this.client= client
        this.goods = goods
        this.amount = amount
        this.price = [priceBulk,priceMarket,pricePurchesed]
        this.createdDate = createdDate
    }
    get allDate(){
        return {...this}
    }
}
class NewProduct{
    constructor(nameGoods,amount,createdDate,priceMarket,priceBulk,pricePurchesed){
        this.barCode = Date.now()
        this.nameGoods= nameGoods
        this.amount = amount
        this.price = [priceBulk,priceMarket,pricePurchesed]
        this.createdDate = createdDate
    }
    get allDate(){
        return {...this}
    }
}

export {NewMarket,NewProduct}