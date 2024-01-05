//  Example of using filter() method in javascript

let setOfContacts = [{name: "Alisa", address: "North Valley, Block 45, Cisco Street, Metropolitan, US"},
 {name:  "William", address: "Random HotDog Shop, David Car Repair, Block Q, Metropolitan"},
 {name : "Kyle", address: "Yui La Fang Bistro, Modern Street, Metropolitan"}];

let findWilliamforInvestigation = setOfContacts.filter(function(setOfContacts) {
    if (setOfContacts.name == "William" && setOfContacts.address == "Random HotDog Shop, David Car Repair, Block Q, Metropolitan") {
        return `${setOfContacts.name} and his address : ${setOfContacts.address}`;
    }
});
console.log(findWilliam);