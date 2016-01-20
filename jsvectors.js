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
Vec.scale = function(vec, j){
	return [vec[0]*j, vec[1]*j];
};
