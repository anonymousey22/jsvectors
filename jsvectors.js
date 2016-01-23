//Vector Functions
var Vec = {};
Vec.dotPr = function(vec1, vec2){
	return vec1[0]*vec2[0]+vec1[1]*vec2[1];
};
Vec.len = function(vec){
	return Math.sqrt(Math.pow(vec[0], 2)+Math.pow(vec[1], 2));
};
Vec.norm = function(vec){
	var norm = Vec.len(vec);
  	return [vec[0]/norm, vec[1]/norm];
};
Vec.neg = function(vec){
	return [-1*vec[0], -1*vec[0]];
};
Vec.add = function(vec1, vec2){
	return [vec1[0]+vec2[0], vec1[1]+vec2[1]];
};
Vec.sub = function(vec1, vec2){
  	return Vec.add(vec1, Vec.neg(vec2));
};
Vec.scale = function(vec, j){
	return [vec[0]*j, vec[1]*j];
};
Vec.recToPol = function(vec){
	return [Math.atan2(vec[1], vec[0]), Vec.len(vec)];
};
Vec.polToRec = function(theta, j){
	return [j*Math.cos(theta), j*Math.sin(theta)];
};
Vec.rotate = function(vec, theta){
	var cos = Math.cos(theta);
 	var sin = Math.sin(theta);
  	return [cos*vec[0]+-1*sin*vec[1], sin*vec[0]+cos*vec[1]];
};
