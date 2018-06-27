$(document).ready(function() {

    var code = "60606040526102fc806100126000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480635b2329d41461004f578063c1cbbca71461007d578063f7572cf3146100955761004d565b005b61006560048080359060200190919050506100ca565b60405180821515815260200191505060405180910390f35b6100936004808035906020019091905050610182565b005b6100b46004808035906020019091908035906020019091905050610241565b6040518082815260200191505060405180910390f35b60006000600160005060008481526020019081526020016000206000509050806001016000505481600301600050541015610108576000915061017c565b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660008260030160005054604051809050600060405180830381858888f1935050505050600081600301600050819055506001915061017c565b50919050565b600060016000506000838152602001908152602001600020600050905060406040519081016040528033815260200134815260200150816004016000506000836002016000818150548092919060010191905055815260200190815260200160002060005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506020820151816001016000505590505034816003016000828282505401925050819055505b5050565b600060006000818150548092919060010191905055905080506080604051908101604052808481526020018381526020016000815260200160008152602001506001600050600083815260200190815260200160002060005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506020820151816001016000505560408201518160020160005055606082015181600301600050559050505b9291505056";
    var abi = [{"constant":false,"inputs":[{"name":"campaignID","type":"uint256"}],"name":"checkGoalReached","outputs":[{"name":"reached","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"campaignID","type":"uint256"}],"name":"contribute","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"beneficiary","type":"address"},{"name":"goal","type":"uint256"}],"name":"newCampaign","outputs":[{"name":"campaignID","type":"uint256"}],"type":"function"}];
    var Contract = web3.eth.contract(abi);
    var crowd = null;

    web3.personal.unlockAccount(web3.eth.accounts[0],'kyotree20.');
    console.log("UNLOCKED");
    $('#btnCreate').click(function(){
        console.log("aa");
            crowd = Contract.new({
            data:code,
            gas:2000000,
            from:web3.eth.accounts[0]
        }, function (error, contract) {
            if (!error) {
                if (!contract.address) {
                    console.log("Creating Contract", contract.transactionHash);
                } else {
                    address = contract.address;
                    console.log("Contract Deployed", contract.address);
                }
            } else
                console.error(error);
        });
    });
    $('#btnAt').click(function(){
        var address = $('#_contractAddress').val();
        crowd = Contract.at(address);
    });
    $('#btnNewCampaign').click(function(){
    });
    $('#btnContribute').click(function(){
    });
    $('#btnCheck').click(function(){
    });
    $('#btnCheck_Tx').click(function(){
    });
});