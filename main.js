function getWeb3For(network) {
  switch (network) {
    case "mainnet": return new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/70b9b9c773644a84964a338d2b2dac95"))
    case "rinkeby": return new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/70b9b9c773644a84964a338d2b2dac95"))
    case "ropsten": return new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/70b9b9c773644a84964a338d2b2dac95"))
    case "kovan": return new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/70b9b9c773644a84964a338d2b2dac95"))
  }
  return undefined;
}

$(function () {
  $("#btn").click(function () {
    let addr = $("#address").val()
    let key = $("#key").val()
    let web3 = getWeb3For($("#network").val())
    $("#value").text("")
    web3.eth.getStorageAt(addr, key).then(function (ret) {
      $("#value").text(ret)
    }).catch(function () {
      alert("Error occurred on retrieving the state on given address.")
    })
  })
})
