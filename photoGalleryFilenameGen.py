#####
# Script to generate list of filenames in photo gallery folder, because
# javascript does not want to pull them all in for me.
# Also generates the HTML list elements for them, though this is a bad thing.
#####

from os import listdir, stat
from os.path import isfile, join

dirPath = "./j-entry-page/public/images/gallery_photos"
allFilePaths = [ "/images/gallery_photos/"+f for f in listdir(dirPath) if isfile(join(dirPath, f))
             and f != ".DS_Store" ]

#print "Found", len(allFilePaths), "files in the directory."

# Generate the HTML for the image elements for each photo
allElts = []
allEltsHTMLString = ""
for filePath in allFilePaths:
	# removed : src=\"" + filePath + "\" from below
    newElt = "<li class=\"col-lg-4 col-md-2 col-sm-12 col-xs-12\"><img class=\"img-responsive lazy\" src=\"/images/loading_img/ajax-loader.gif\" data-src=\"" + filePath + "\"  /></li>"
    allElts.append(newElt)
    print newElt
