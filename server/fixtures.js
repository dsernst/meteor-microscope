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
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });

  Comments.insert({
    postId: letsFixId,
    userId: gary._id,
    author: gary.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: letsFixId,
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
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Too Many Bunnies',
    userId: gary._id,
    author: gary.profile.name,
    url: 'http://www.toomanybunnies.com/about-us.html',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000 + 1,
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}
