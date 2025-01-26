import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token {
  Debug.print("After Canister Upgrade");
  //znqpo-jeg7i-rmq4k-ipmkj-izb2j-frc5k-wwd6s-46mbg-zt63b-cg7k2-eae
  let owner : Principal = Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai");
  //canisterId = be2us-64aaa-aaaaa-qaabq-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
  let totalSupply : Nat = 1_000_000_000;
  let symbol : Text = "GGJ";

  private stable var balanceEntries : [(Principal,Nat)] = [];
  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  if (balances.size() < 1){
    balances.put(owner, totalSupply);
  };

  public query func balanceOf(who : Principal) : async Nat {
    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };
    return balance;
  };

  public query func getSymbol() : async Text {
    return symbol;
  };

  public shared (msg) func payOut() : async Text {
    Debug.print(debug_show (msg));
    let amount = 10_000;
    if (balances.get(msg.caller) == null) {
      // balances.put(msg.caller, amount);
      let result = await transfered(msg.caller, amount);
      return result;
    } else {
      return "Already Claimed The Free Tokens";
    }

  };

  public shared (msg) func transfered(to : Principal, amount : Nat) : async Text {
    let fromBalace = await balanceOf(msg.caller);
    if (fromBalace > amount) {
      let newFromBalance : Nat = fromBalace - amount;
      balances.put(msg.caller, newFromBalance);

      let toBalance = await balanceOf(to);
      let newToBalance = toBalance + amount;
      balances.put(to, newToBalance);
      return "Success";
    } else {

      return "Insufficient Balance";
    }

  };

  system func preupgrade(){
    balanceEntries := Iter.toArray(balances.entries());
  };

  system func postupgrade(){
    balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(),1, Principal.equal, Principal.hash);
    if (balances.size() < 1){
      balances.put(owner, totalSupply);
    }
  };



};
