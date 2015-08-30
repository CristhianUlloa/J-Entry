#####
# Script to generate list of filenames in photo gallery folder, because
# javascript does not want to pull them all in for me.
# Also generates the HTML list elements for them, though this is a bad thing.
#####

from os import listdir, stat
from os.path import isfile, join

dirPath = "./j-entry-page/public/images/gallery_pictures"
allFilePaths = [ "/images/gallery_pictures/"+f for f in listdir(dirPath) if isfile(join(dirPath, f))
             and f != ".DS_Store" ]

#print "Found", len(allFilePaths), "files in the directory."

# Generate the HTML for the image elements for each photo
allElts = []
allEltsHTMLString = ""
for filePath in allFilePaths:
    newElt = "<li class=\"col-lg-4 col-md-2 col-sm-10 col-xs-10\"><img class=\"img-responsive\" src=\"" + filePath + "\"/></li>"
    allElts.append(newElt)
    print newElt
