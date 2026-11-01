import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {profileEligibleRecipes} from '../lib/profile-recommendations.mjs';
import {generateWeek,generateTwoCourseWeek,replaceDay,replaceTwoCourse} from '../lib/weekly-plan.mjs';
const samples=[
 {id:'soup',category:'soup',minutes:20,ingredients:[['répa',1,'db']]},
 {id:'main-ok',category:'main',minutes:25,ingredients:[['burgonya',1,'kg']]},
 {id:'main-gomba',category:'main',minutes:20,ingredients:[['gomba',1,'kg']]},
 {id:'main-slow',category:'main',minutes:90,ingredients:[['rizs',1,'kg']]}
];
test('weekly plan excludes disliked ingredients and long cooking times',()=>{
 const eligible=profileEligibleRecipes(samples,{servings:4,cookingTime:30,disliked:['gomba'],allergens:[]});
 assert.deepEqual(eligible.map(r=>r.id),['soup','main-ok']);
 assert.ok(generateWeek(eligible.filter(r=>r.category!=='soup'),30).every(id=>id==='main-ok'));
 const two=generateTwoCourseWeek(eligible,30);
 assert.equal(two.length,7);
 assert.ok(two.every(d=>d.soup==='soup'&&d.main==='main-ok'));
 assert.deepEqual(replaceDay(['main-gomba'],0,eligible.filter(r=>r.category!=='soup'),30),['main-ok']);
 assert.deepEqual(replaceTwoCourse([{soup:'soup',main:'main-gomba'}],0,'main',eligible,30),[{soup:'soup',main:'main-ok'}]);
});
test('allergen restrictions block unverified recipes',()=>{
 assert.deepEqual(profileEligibleRecipes(samples,{servings:4,cookingTime:60,disliked:[],allergens:['tej']}),[]);
});
test('weekly UI uses profile-filtered pool for generation and replacements',()=>{
 const source=readFileSync(new URL('../app/page.tsx',import.meta.url),'utf8');
 assert.match(source,/generateTwoCourseWeek\(weekEligible/);
 assert.match(source,/generateWeek\(weekEligible/);
 assert.match(source,/replaceTwoCourse\(prev,i,course,weekEligible/);
 assert.match(source,/replaceDay\(prev,i,weekEligible/);
 assert.match(source,/disabled=\{weekBlocked\}/);
});
