function friend(friends){
  return friends.filter(friend => friend.length === 4);

  /// for loop
  let yourFriends = [];
  for(let i = 0; i < friends.length; i++) {
    if(friends[i].length === 4) yourFriends.push(friends[i]);
  }
  return yourFriends;
}

module.exports = friend;