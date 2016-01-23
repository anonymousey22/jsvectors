# jsvectors
Vector math in JavaScript.
This .min.js stores a list of basic two-dimensional vector functions in the object "Vec". 

Documentation:

All vectors are two-dimensional arrays in the form of [x,y]

Vec.add(vec1, vec2)     :  returns the sum of the two vector inputs

Vec.dotPr(vec1, vec2)   :  returns the dot product of the two vectors

Vec.len(vec)            :  returns the length (magnitude) of the vector

Vec.neg(vec)            :  returns the negation of the vector

Vec.norm(vec)           :  returns the normalization of the vector

Vec.polToRec(theta, j)  :  returns the vector described by angle theta and scalar j

Vec.recToPol(vec)       :  returns a vector in an array as [angle, scalar]

Vec.rotate(vec, theta)  :  returns the vector rotated by theta

Vec.scale(vec, j)       :  returns the multiplication of the vector by scalar j

Vec.sub(vec1, vec2)     :  returns the subtraction of vec2 from vec1
