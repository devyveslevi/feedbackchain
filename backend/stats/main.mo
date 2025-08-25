import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

// Import the Feedback canister interface
import Feedback "canister:feedback";

actor {
    // Stats module - FeedBackChain
    
    // Function to count feedbacks by type
    public func countFeedbacks() : async (Nat, Nat, Nat) {
        // Get all feedbacks from the Feedback canister
        let feedbacks = await Feedback.listFeedbacks();
        
        // Initialize counters
        var elogios : Nat = 0;
        var reclamacoes : Nat = 0;
        var sugestoes : Nat = 0;
        
        // Count feedbacks by type
        for (feedback in feedbacks.vals()) {
            switch (feedback.kind) {
                case (#ELOGIO) {
                    elogios += 1;
                };
                case (#RECLAMACAO) {
                    reclamacoes += 1;
                };
                case (#SUGESTAO) {
                    sugestoes += 1;
                };
            };
        };
        
        // Return tuple with counts
        return (elogios, reclamacoes, sugestoes);
    };
}
