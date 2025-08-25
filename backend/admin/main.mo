import Principal "mo:base/Principal";

actor {
    // Admin module - FeedBackChain
    
    // Declare admin principal
    let admin = Principal.fromText("aaaaa-aa");
    
    // Function to clear all data (admin only)
    public shared({caller}) func clearAll() : async Text {
        // Check if caller is the admin
        if (caller == admin) {
            // TODO: Implement actual clearing logic here
            // This would typically involve calling other canisters to clear their data
            return "Cleared by admin";
        } else {
            return "Not authorized";
        };
    };
}
