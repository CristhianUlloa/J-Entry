#####
# Script to generate list of filenames in photo gallery folder, because
# javascript does not want to pull them all in for me.
# Also generates the HTML list elements for them, though this is a bad thing.
#####

from os import listdir, stat
from os.path import isfile, join

dirPath = "./j-entry-page/public/images/gallery_photos"
# TODO: uncomment the line below to get the info 
# compressedDirPath = "./j-entry-page/public/images/compressed_gallery_photos"
# allFilePaths = [ "/images/gallery_photos/"+f for f in listdir(dirPath) if isfile(join(dirPath, f))
#              and f != ".DS_Store" ]

allFilePaths = { "/images/gallery_photos/"+f: "/images/gallery_photos/compressed/opt-" +f for f in listdir(dirPath) if isfile(join(dirPath, f))
             and f != ".DS_Store" }
# commpressedFilePaths = [ "/images/compressed_gallery_photos/"+f for f in listdir(compressedDirPath) if isfile(join(compressedDirPath, f))
#              and f != ".DS_Store" ]

# allFilePaths = allFilePaths + commpressedFilePaths

#print "Found", len(allFilePaths), "files in the directory."

# Generate the HTML for the image elements for each photo
allElts = []
allEltsHTMLString = ""
for filePath in allFilePaths:
	# removed : src=\"" + filePath + "\" from below

	# Uncomment line below to create html for tricia's gallery
    # newElt = "<li class=\"col-lg-4 col-md-2 col-sm-12 col-xs-12\"><img class=\"img-responsive lazy\" src=\"/images/loading_img/ajax-loader.gif\" data-src=\"" + filePath + "\"  /></li>"
    
    # Uncomment line below to create html for jquery galllery
    newElt = "<li class=\"col-lg-4 col-md-2 col-sm-12 col-xs-12\"><a href=\"" + filePath + "\" data-gallery> <img class=\"img-responsive\" src=\"" + allFilePaths[filePath] + "\" ></a></li>"
    allElts.append(newElt)
    print newElt
