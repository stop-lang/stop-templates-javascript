"use strict";

var expect = require('chai').expect;

const stop = require('stop');
const stopTemplates = require('../src/index');

describe('Stop', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
        	let stopTestContent = `
start Request {
    -> Posts
}

stop Posts {
    [Post] posts
    optional User currentUser
    optional string fuck
    optional string dingus
    optional User realUser
    bool boolTest
}

Post {
    string title
    string body
    string description
    [string] tags
    optional string fuckface
    optional User user

}

PostItemComponent {
    string title
    string body
    optional string short_description
    optional int32 integer
    optional bool booly
    optional User user
}

PostComponent {
    Post post
}

FooterComponent {

}

Text {
    string text
    optional [string] values
    optional [int32] nums
}

User {
    string name
    optional [string] aliases
}
        	`;
            let templateTestContent = `
[children]
    Text(text: children_item)
[posts]
    PostItemComponent(title: title, body: body, integer: 54858, booly: true, user: user)
    [tags]
        Text(text: tags_item)
    !fuckface
        Text(text: "fuckface")
    user
        Text(text: name)
![posts]
    Text(text: "no posts found")
currentUser
    Text(text: "current user set!")
!currentUser
    Text(text: "no user set!")
    currentUser
        Text(text: "fin")
FooterComponent()
realUser.name
    Text(text: "shit")
fuck
    Text(text: "dong", values: [realUser.name], nums:[324324,32434,1111])
[realUser.aliases]
    Text(text: aliases_item)
![realUser.aliases]
    Text(text: "BMANSLIP!")
!boolTest
    Text(text: "BOOL TEST FALSE")
[posts]
    PostComponent(post: posts_item)

`;
        	expect(function(){
        		let stopInstance = new stop.Stop(stopTestContent);
                let state = stopInstance.states["Posts"];
                let template = new stopTemplates.Template(stopInstance, state, templateTestContent);
        	}).to.not.throw();
        });
    });
});