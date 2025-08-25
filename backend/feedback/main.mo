import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor {
    // Feedback module - FeedBackChain
    
    // Define feedback types
    public type FeedbackType = {
        #ELOGIO;
        #RECLAMACAO;
        #SUGESTAO;
    };
    
    // Define feedback structure
    public type Feedback = {
        text: Text;
        sender: Principal;
        kind: FeedbackType;
        timestamp: Int;
    };
    
    // Stable variable to store feedbacks
    stable var feedbacks : [Feedback] = [];
    
    // Function to send a new feedback
    public shared({caller}) func sendFeedback(text: Text, kind: FeedbackType) : async Bool {
        // Create new feedback
        let newFeedback : Feedback = {
            text = text;
            sender = caller;
            kind = kind;
            timestamp = Time.now();
        };
        
        // Add feedback to array
        feedbacks := Array.append<Feedback>(feedbacks, [newFeedback]);
        
        // Check if we need to remove oldest feedback (keep max 50)
        if (Array.size(feedbacks) > 50) {
            // Remove the first (oldest) feedback
            let (_, remainingFeedbacks) = Array.split<Feedback>(feedbacks, 1);
            feedbacks := remainingFeedbacks;
        };
        
        return true;
    };
    
    // Query function to list all feedbacks
    public query func listFeedbacks() : async [Feedback] {
        return feedbacks;
    };
}
