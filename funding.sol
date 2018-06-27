pragma solidity ^0.4.2;

contract CrowdFunding {
    // Fund Investors
    struct Funder {
        address addr;
        uint amount;
    }
    
    // Fund Campaign
    struct Campaign {
        address beneficiary;
        uint fundingGoal;
        uint numFunders;
        uint amount;
        mapping (uint => Funder) funders;
    }
    
    uint numCampaigns;
    mapping (uint => Campaign) campaigns; // Campaign ID to Campaign
    
    // Initiate new campaign
    function newCampaign(address _beneficiary, uint _goal) returns (uint campaignId_) {
        campaignId_ = numCampaigns++;
        campaigns[campaignId_] = Campaign(_beneficiary, _goal, 0,0);
    }
    
    function contribute(uint _campaignId) payable {
        Campaign c = campaigns[_campaignId];
        if (c.beneficiary == 0) {
            throw;
        }
        c.funders[c.numFunders++] = Funder({
            addr: msg.sender 
            ,amount: msg.value 
        });
        c.amount += msg.value;
    }
    
    function checkGoalReached(uint _campaignId) returns (bool reached_, uint goal_, uint amount_) {
        Campaign c = campaigns[_campaignId];
        goal_ = c.fundingGoal;
        amount_ = c.amount;
        if (c.amount < c.fundingGoal) {
            reached_ = false;
            return;
        }
        if (!c.beneficiary.send(c.amount)) { // send vs transfer
            c.beneficiary.transfer(c.amount);
        }
        reached_ = true;
        c.amount = 0;
    }
    
    function () {
        throw;
    }
}