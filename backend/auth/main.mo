import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Error "mo:base/Error";

actor {
    // Auth module - FeedBackChain
    
    // Stable variable to store registered users
    stable var users : [Principal] = [];
    
    // Function to register a new user
    public shared({caller}) func registerUser() : async Bool {
        // Check if user is already registered
        let isRegistered = Array.find<Principal>(users, func (user) = user == caller);
        
        switch (isRegistered) {
            case (?_) {
                // User already exists
                return false;
            };
            case null {
                // Add new user to the array
                users := Array.append<Principal>(users, [caller]);
                return true;
            };
        };
    };
    
    // Query function to list all registered users
    public query func listUsers() : async [Principal] {
        return users;
    };
}
