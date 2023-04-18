interface Image {
    blur_hash: string;
    urls:      Urls;
}

interface Urls {
    raw:      string;
    full:     string;
    regular:  string;
    small:    string;
    thumb:    string;
    small_s3: string;
}