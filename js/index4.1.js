var bag = {
  content: [ 
   "паспорт",
   "водительское удостоверение",
   "телефон",
   "ключи", 
   "кошелек",
    "помада" 
  ],
  addInBag: function ( name ) {
     this.content.push ( name )
  } ,
  deleteFromBag: function ( num ) {
     this.content.splice ( num, 1 )
  } 
}
console.log (bag.content)

bag.deleteFromBag ( 2 )
  console.log ( bag.content )
bag.addInBag ( "кредитная карта" )
  console.log ( bag.content )
bag.addInBag ( "парфюм" )
  console.log ( bag.content )
bag.deleteFromBag ( 1 )
   console.log ( bag.content )