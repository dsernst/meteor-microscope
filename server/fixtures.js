// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var garyId = Meteor.users.insert({
    profile: { name: 'Gary Coleman' }
  });
  var gary = Meteor.users.findOne(garyId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Baron Cohen' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var letsFixId = Posts.insert({
    title: 'Introducing LetsFix',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://letsfix.net',
    submitted: now - 7 * 3600 * 1000
  });

  Comments.insert({
    postId: telescopeId,
    userId: gary._id,
    author: gary.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can Gary! Wawaweewa'
  });

  Posts.insert({
    title: 'Meteor',
    userId: gary._id,
    author: gary.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000
  });

  Posts.insert({
    title: 'Too Many Bunnies',
    userId: gary._id,
    author: gary.profile.name,
    url: 'http://www.toomanybunnies.com/about-us.html',
    submitted: now - 12 * 3600 * 1000
  });
}
