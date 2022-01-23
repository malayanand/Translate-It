from wikipediaapi import Wikipedia
import pysbd


def getWikiSummary(title):
    wiki = Wikipedia('en')
    page_py = wiki.page(title)
    print("Page - Exists: ", page_py.exists())
    # Page - Exists: True

    page_missing = wiki.page('NonExistingPageWithStrangeName')
    print("Page - Exists: ", page_missing.exists())
    # Page - Exists: False

    print('Page title: ', page_py.title)
    summary = page_py.summary

    print("Summary \n", summary)

    return summary


def split_summary_to_sentences(summary):
    text = summary
    seg = pysbd.Segmenter(language="en", clean=False)
    sentences = seg.segment(text)
    print(sentences)
    return sentences


# summary = getWikiSummary("Cricket")
# split_summary_to_sentences(summary)